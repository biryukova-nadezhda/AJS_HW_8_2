export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const transformedBuffer = new Uint16Array(this.buffer);
    return String.fromCharCode.apply(null, transformedBuffer);
  }
}
