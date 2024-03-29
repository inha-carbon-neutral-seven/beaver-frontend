import { useSelector } from "react-redux";
import beaver from "../../../image/logo.jpg";

function Recommendations({ onRecommendationClick }) {
  const recommendations = useSelector((state) => state.dataVar.recommendations);

  return (
    <div className="flex-grow">
      <ul className="list-none p-0 m-0">
        <div className="flex-col">
          <div className="flex">
            <img src={beaver} className="h-12 rounded-full my-5 ml-5" />
            <div className="p-3 m-5 rounded-md max-w-2/3 h-auto bg-gray-200 ml-1 break-words">
              {recommendations.length > 0 ? (
                <div>
                  <p>파일 업로드가 성공적으로 완료되었습니다!</p>
                  <p>분석 결과에 기반하여 여러가지 흥미로운 정보와 함께 귀하에게 맞춤형 추천을 제공해드릴 수 있습니다.</p>
                  <p>아래 세 가지 질문 중 하나를 선택하여 답변해 주세요.</p>
                  <p>귀하의 답변을 토대로 더 정확하고 개인화된 정보를 제공해드리겠습니다.</p>
                </div>
              ) : (
                <div>
                  <p>파일 업로드에 실패했습니다.</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            {recommendations.length > 0 && (
              <div>
                {recommendations.map((recommendation, index) => (
                  <li
                    key={index}
                    className={`w-[40%] h-auto rounded-[15px] shadow-md
                    bg-[rgb(255,255,255)] dark:bg-[rgb(45,47,51)]
                    text-[rgb(66,66,66)] dark:text-[rgb(196,196,196)]
                    dark:hover:bg-[rgb(60,63,68)] hover:bg-[rgb(242,242,242)] hover:shadow-lg
                    break-word ml-[70px] mb-2 p-3 cursor-pointer`}
                    onClick={() => onRecommendationClick(recommendation)}
                  >
                    {recommendation}
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Recommendations;
