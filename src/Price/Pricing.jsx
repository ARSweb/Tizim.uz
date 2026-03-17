import "./Pricinga.css"

function Prices() {
  return (
    <div className="quti">

      <p className="asos1">Tariflar</p>
      <h2 className="asos2">Sizning biznesingiz uchun mos narxlar</h2>
      <p className="asos3">
        Yashirin to'lovlarsiz, shaffof va hamyonbop tarif rejalarini tanlang.
      </p>

      <div className="cards">

        <div className="box1">
          <h3 className="h3">Business Plan</h3>
          <p className="p">Kichik bizneslar uchun ideal yechim</p>
          <h1 className="h1">100,000 <span>UZS / oy</span></h1>

          <h4 className="h4">🔵 Single business management</h4>
          <h4 className="h4">🔵 Asosiy analitika</h4>
          <h4 className="h4">🔵 Moliya nazorati</h4>
          <h4 className="h4 text-gray-400">🔴 Ko'p foydalanuvchili kirish</h4>

          <button className="button">Tanlash</button>
        </div>


        <div className="box2">
          <div className="badge">Eng mashhur</div>

          <h3 className="h3">PRO Plan</h3>
          <p className="p">O'sayotgan bizneslar uchun</p>
          <h1 className="h1">200,000 <span>UZS / oy</span></h1>

          <h4 className="h4">🔵 Unlimited businesses</h4>
          <h4 className="h4">🔵 Kengaytirilgan analitika</h4>
          <h4 className="h4">🔵 Ombor hisobi</h4>
          <h4 className="h4">🔵 Xodimlar boshqaruvi</h4>

          <button className="button">Tanlash</button>
        </div>


        <div className="box1">
          <h3 className="h3">Team Plan</h3>
          <p className="p">Katta jamoalar va tarmoqlar uchun</p>
          <h1 className="h1">300,000 <span>UZS / oy</span></h1>

          <h4 className="h4">🔵 Multi-user access</h4>
          <h4 className="h4">🔵 Barcha PRO imkoniyatlar</h4>
          <h4 className="h4">🔵 Rollarni taqsimlash</h4>
          <h4 className="h4">🔵 24/7 VIP qo'llab-quvvatlash</h4>

          <button className="button">Tanlash</button>
        </div>

      </div>
    </div>
  )
}

export default Prices