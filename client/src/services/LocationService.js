import MY_AXIOS from './index';

export default {
  getLocation() {
    return MY_AXIOS.get(
      `https://api.ipdata.co?api-key=d39ee42bf2aa456334eb7eff89b0475d24d2417e4b0833155a123bd1`
    );
  },
};
