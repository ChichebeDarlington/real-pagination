const paginate = (followers) => {
  const indexPerPage = 10;
  const nbPages = followers.length / indexPerPage;

  const newFollowers = Array.from({ length: nbPages }, (_, index) => {
    const start = indexPerPage * index;
    return followers.slice(start, start + indexPerPage);
  });
  //   console.log(newFollowers);
  return newFollowers;
};

export default paginate;
