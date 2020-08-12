import axios from "axios";
import { useEffect, useState } from "react";

const ITEM = "hfakhfdarweoDKFHSF";

export function useGetTells() {
  const url = `${process.env.REACT_APP_API_URL}/tell/tells`;
  const [tells, setTells] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res, err) => {
        setTells(res.data);
      })
      .catch((err) => alert("There's an error, please refresh"));
  }, [url]);
  return tells;
}

export function useHandleVisitorsLogic() {
  const url = `${process.env.REACT_APP_API_URL}/visitors`;
  const [id, setId] = useState(0);

  useEffect(() => {
    if (localStorage.getItem(ITEM) != null) {
      axios.get(url).then((res) => setId(res.data.count));
    } else {
      axios.post(url).then((res) => {
        setId(res.data.vid);
        localStorage.setItem(ITEM, id);
      });
    }
  }, [url]);
  return id;
}