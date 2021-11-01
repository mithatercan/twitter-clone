import getFormData from "../../utils/getFormData";
import { useSelector } from "react-redux";
import * as api from "../../api/requests/tweet";
import { useHistory } from "react-router-dom";

const NewTweetForm = () => {
  const profile = useSelector((state) => state.profile.data);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    await api.newTweet(formData, profile.token);
    setTimeout(() => {
      history.push("/explore");
    }, 500);
  };

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <textarea
        name="body"
        cols="30"
        rows="10"
        placeholder="What's happening?"
      ></textarea>
      <button className="tweet-form__btn">Tweet</button>
    </form>
  );
};

export default NewTweetForm;
