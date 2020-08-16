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

export function useGetLiked(tellId, visitorId) {
  console.log("tell", tellId, "vid", visitorId);
  const url = `${process.env.REACT_APP_API_URL}/likes/liked`;
  const [liked, setLiked] = useState({ total: 0, liked: 0 });

  useEffect(() => {
    axios
      .get(url, {
        params: {
          tellId: tellId,
          visitorId: visitorId,
        },
      })
      .then((res, err) => {
        setLiked({
          liked: parseInt(res.data.liked),
          total: parseInt(res.data.total),
        });
      });
  }, [url, tellId, visitorId]);
  return [liked, setLiked];
}

export function useHandleVisitorsLogic() {
  console.log("hello");
  const url = `${process.env.REACT_APP_API_URL}/visitors`;
  const [visitor, setVisitor] = useState({ visitors: 0, vid: 0 });
  const vid = parseInt(localStorage.getItem(ITEM));
  useEffect(() => {
    if (!isNaN(vid) && vid !== 0) {
      axios
        .get(url)
        .then((res) =>
          setVisitor({ visitors: parseInt(res.data.count), vid: vid })
        );
    } else {
      axios.post(url).then((res) => {
        const newVid = parseInt(res.data.vid);
        setVisitor({ visitors: newVid, vid: newVid });
        localStorage.setItem(ITEM, newVid);
      });
    }
  }, [url, vid]);
  return visitor;
}
