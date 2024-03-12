const fetcher = async (url: RequestInfo | URL) => {
  const res = await fetch(url);
  if (!res.ok) {
    const msg = "An error occurred while fetching the data";
    const info = await res.json();
    const status = res.status;
    const erorr = new Error(msg);
    console.error(info, status);
    throw erorr;
  }
  return res.json();
};

export default fetcher;