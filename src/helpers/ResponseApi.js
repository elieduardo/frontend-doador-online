import { DefaultError } from "../constants/values";
import { ForbiddenError } from "../constants/values";
import { NetworkError } from "../constants/values";
import { DefaultTitleError } from "../constants/values";

const CODE_UNAUTHORIZED = 401;
const CODE_FORBIDDEN = 403;
const CODE_ERROR = 400;
const MSG_NETWORK_ERROR = "Network Error";

function handleMessage(error) {
  const { response } = error;

  const { status, data = {} } = response;

  switch (status) {
    case CODE_UNAUTHORIZED:
      return { status, title: "Não autorizado", messages: ["Usuário não autorizado."] };
    case CODE_FORBIDDEN:
      return { status, title: DefaultTitleError, messages: [ForbiddenError] };
    case CODE_ERROR:
      return {
        status,
        title: DefaultTitleError,
        messages: getMessageErrors(data),
      };
    default:
      const { errors = {}, title = DefaultTitleError } = data;
      const { messages = [DefaultError] } = errors;
      return { status, title, messages };
  }
}

export function responseError(response) {
  try {
    const error = handleMessage(response);
    return Promise.reject(error);
  } catch {
    const { message } = response;
    let messageAlert = DefaultError;

    if (MSG_NETWORK_ERROR === message) messageAlert = NetworkError;

    const status = 500;
    const messages = [messageAlert];

    return Promise.reject({ status, title: DefaultTitleError, messages });
  }
}

export function getMessageErrors(errors) {
  let { Messages } = errors.Errors;
  if (!Array.isArray(Messages)) {
    return "";
  }
  const errorMessages = Messages.map((error) => error);
  const errorString = errorMessages.join("\n");

  return errorString;
}
