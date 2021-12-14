import getFormData from "../../utils/getFormData";
import { useSelector, useDispatch } from "react-redux";
import { RiFileGifLine, GrEmoji, FiImage } from "react-icons/all";
import Avatar from "../avatar/Avatar";
import TextareaAutosize from "react-textarea-autosize";
import { newTweet, newRetweet } from "../../redux/actions/tweetActions";

const NewTweetForm = () => {
  const { username, avatar } = useSelector(
    (state) => state.currentProfile.data
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    dispatch(newTweet(formData));
    e.target.reset();
  };

  return (
    <div className="tweet-form display-flex align-items-fs">
      <div className="tweet-form__img display-flex justify-content-c align-items-c">
        <Avatar username={username} avatar={avatar} size="small" />
      </div>
      <form className="tweet-form__form" onSubmit={handleSubmit}>
        <TextareaAutosize name="body" placeholder="What's happening?" />
        <div className="display-flex justify-content-sb align-items-c">
          <ul className="display-flex">
            <li>
              <FiImage />
            </li>
            <li>
              <RiFileGifLine />
            </li>
            <li>
              <GrEmoji />
            </li>
          </ul>
          <button className="tweet-form__btn">Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default NewTweetForm;
