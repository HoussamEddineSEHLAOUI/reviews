
import './reviewComp.css';
function ReviewComp(props) {
  return (
    <div className="review">
        <div className="imgc">
            <div className="bc-com">
                <div className="img-com"></div>
            </div>
        </div>
        <h4 className="author">{props.user.name}</h4>
        <p className="job">{props.user.job}</p>
        <p className="rev">{props.user.review}</p>
        <div className="button-continer">
            <button onClick={props.onClickLeft} className="but" >{"<"}</button>
            <button onClick={props.onClickRight} className="but" >{">"}</button>
        </div>
        <button onClick={props.onClickRanddom} className="btn-random">Surprise Me</button>
    </div>
  );
}
export default ReviewComp;
