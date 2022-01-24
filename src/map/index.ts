function map<T>(callback: Function) {
  if (typeof this !== "object" || !Array.isArray(this))
    throw new Error(`${this}.map is not a function`);
  const result: T[] = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    result[i] = callback(item);
  }
  return result;
}

export default map;
