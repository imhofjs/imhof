import get from './get';
import handleError from './handle-error';
import parse from './parse';

export default function getValidArgs() {
  const args = get();
  let result;
  try {
    result = parse(args);
  } catch (error) {
    handleError(error);
  }
  return result;
}
