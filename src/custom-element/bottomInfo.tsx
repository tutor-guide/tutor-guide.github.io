export default function BottomInfo() {
  return (
    <div className="grid bg-slate-200 h-auto md:grid-cols-3">
      <div className="text-center m-5">
        <h1 className="border-b border-slate-300 font-bold">Follow Us!</h1>
        <div className="mt-1">
          <a
            href="https://www.facebook.com/profile.php?id=100078268572359"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook fa-2x mx-2"></i>
          </a>
          <a href="https://www.instagram.com/tutor.guide/" target="_blank">
            <i className="fa-brands fa-instagram fa-2x mx-2"></i>
          </a>
        </div>
      </div>
      <div className="text-center m-5">
        <h1 className="border-b border-slate-300 font-bold">更多資訊</h1>
        <div className="grid">
          <a href="/fee-intro">收費詳情</a>
          <a href="/terms-and-conditions">注意事項</a>
          <a href="/reg-procedure">登記流程</a>
        </div>
      </div>
      <div className="text-center m-5">
        <h1 className="border-b border-slate-300 font-bold">最新優惠</h1>
        <div className="grid">
          <a href="/student-discount">學生優惠</a>
          <a href="/tutor-discount">導師優惠</a>
          <a href="/recommend-discount">推薦優惠</a>
        </div>
      </div>
    </div>
  );
}
