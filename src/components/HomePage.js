const HomePage = () => {
  const listItems = [
    "Easy and fast!",
    "Never forget a task!",
    "Always be on point!",
  ];

  return (
    <div id="homePage">
      <div id="title">
        <div id="titleWebsite">Easy Notes!</div>
      </div>
      <div id="listDiv">
        <ul>
          {listItems.map((sentence, index) => {
            return (
              <li className="advantageEasy" key={index}>
                {sentence}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
