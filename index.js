let selector = (select) => {
    return document.querySelector(select);
  };
  const creatElement = (ele) => {
    return document.createElement(ele);
  };
  const appendElement = (parent, child) => {
    return parent.appendChild(child);
  };
  
  /* all tweets will be stored in this array */
  const tweetsArray = [];
  /* -------------------- */
  const mainContainer = selector('.container');
  const tweetForm = creatElement('div');
  tweetForm.className = 'container_form';
  appendElement(mainContainer, tweetForm);
  
  const tweetFormTitle = creatElement('p');
  tweetFormTitle.textContent = ' Add you tweet now ';
  tweetFormTitle.className = 'form_title';
  appendElement(tweetForm, tweetFormTitle);
  
  const tweetContentInput = creatElement('input');
  tweetContentInput.className = 'form_input';
  tweetContentInput.placeholder = 'Enter your tweet';
  appendElement(tweetForm, tweetContentInput);
  
  const tweetUserInput = creatElement('input');
  tweetUserInput.className = 'form_input';
  tweetUserInput.placeholder = 'Enter your name';
  appendElement(tweetForm, tweetUserInput);
  
  const tweetSubmitBtn = creatElement('button');
  tweetSubmitBtn.className = 'form_button';
  tweetSubmitBtn.textContent = 'Add tweet';
  appendElement(tweetForm, tweetSubmitBtn);
  
  const tweetsField = creatElement('div');
  tweetsField.className = 'tweets_field';
  appendElement(mainContainer, tweetsField);
  
  const tweetsFieldTitle = creatElement('p');
  tweetsFieldTitle.className = 'field_title';
  tweetsFieldTitle.textContent = 'Tweets Field';
  appendElement(tweetsField, tweetsFieldTitle);
  
  const tweetsBox = creatElement('div');
  tweetsBox.className = 'tweets_box';
  appendElement(tweetsField, tweetsBox);
  
  const footer = creatElement('div');
  footer.className = 'container_footer';
  appendElement(mainContainer, footer);
  
  const footerContent = creatElement('p');
  footerContent.className = 'footer_content';
  footerContent.textContent =
    'All Rights Reserved @2020 Done By : Abdallah Alnajar';
  appendElement(footer, footerContent);
  
  /* createTweet function */
  
  function createTweet() {
    const tweetContainer = creatElement('div');
    tweetContainer.className = 'tweet_container';
  
    tweetsBox.insertBefore(tweetContainer, tweetsBox.childNodes[0]);
  
    const tweetTitle = creatElement('p');
    tweetTitle.textContent = tweetContentInput.value;
    tweetTitle.className = 'tweet_box_title';
    appendElement(tweetContainer, tweetTitle);
  
    const tweetUser = creatElement('p');
    tweetUser.textContent = tweetUserInput.value;
    tweetUser.className = 'tweet_box_user';
    appendElement(tweetContainer, tweetUser);
  
    const likeButton = creatElement('button');
    likeButton.textContent = 'Like';
    likeButton.className = 'tweet_like_btn';
    appendElement(tweetContainer, likeButton);
  
    likeButton.addEventListener('click', () => {
      tweetTitle.style.color = 'red';
      tweetUser.style.color = 'red';
    });
    const reTweetButton = creatElement('button');
    reTweetButton.textContent = 'Re-tweet';
    reTweetButton.className = 're_tweet_btn';
    appendElement(tweetContainer, reTweetButton);
  
    const tweetObject = {
      tweet: tweetTitle.textContent,
      user: tweetUser.textContent,
    };
    tweetsArray.push(tweetObject);
    /* console this array to see all tweets at your browser console */
    console.log(tweetsArray);
  
    reTweetButton.addEventListener('click', createTweet);
  }
  
  tweetSubmitBtn.addEventListener('click', createTweet);
  
