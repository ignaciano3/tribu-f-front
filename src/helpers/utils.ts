export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function sleep(ms : number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}