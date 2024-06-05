export const handleError  = (error: Error | undefined) => {
  console.error(error)
  throw new Error(typeof error === "string" ? error : error.message);
}