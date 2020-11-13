export const success = (response) => ({
  statusCode: 200,
  body: JSON.stringify({
    response,
  }),
  headers: { "Content-Type": "application/json" },
});

export const error = (e, log) => {
  console.error(log, e);

  return {
    statusCode: 500,
    body: e,
  };
};
