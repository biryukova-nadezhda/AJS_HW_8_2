import ArrayBufferConverter from '../ArrayBufferConverter.js';
import getBuffer from '../getBuffer.js';

test('should get a string', () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  const buffer = getBuffer();
  const arrayBuffer = new ArrayBufferConverter();
  arrayBuffer.load(buffer);
  const result = arrayBuffer.toString();

  expect(result).toEqual(expected);
});
