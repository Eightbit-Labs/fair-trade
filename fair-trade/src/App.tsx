import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar__inner">
          <ul className="navbar__links">
            <li>Home</li>
            <li>About</li>
            <li>Join</li>
          </ul>
        </nav>
      </header>
      <main className="hero">
        <h1 className="hero__heading">The House doesn't win here, you do</h1>
        <h2 className="hero__subheading">Welcome to the Trade</h2>
        <button className="btn-primary">Join Now</button>
      </main>
      <section className='pricing'>
        <h2 className="pricing__heading">Our pricing</h2>
        <p className="pricing__subheading">No hidden fees. No surprises. Just a plan that fits.</p>
        <div className="pricing__grid">
          <div className="pricing__card">
            <span className="pricing__tag">Basic</span>
            <div className="pricing__price">$5<span className="pricing__period">/mo</span></div>
            <p className="pricing__desc">For individuals and prediction enthusiasts</p>
            <ul className="pricing__features">
              <li>Unlimited bets</li>
              <li>Basic data</li>
              <li>Community forum access</li>
            </ul>
            <button className="btn-secondary">Get started</button>
          </div>
          <div className="pricing__card pricing__card--highlight">
            <span className="pricing__tag">Pro</span>
            <div className="pricing__price">$10<span className="pricing__period">/mo</span></div>
            <p className="pricing__desc">For bold, active betters who want to put knowledge behind their money</p>
            <ul className="pricing__features">
              <li>Unlimited trades</li>
              <li>Advanced, up to date articles and analytics</li>
              <li>Portfolio tracking</li>
            </ul>
            <button className="btn-primary">Join Now</button>
          </div>
          <div className="pricing__card">
            <span className="pricing__tag">Enterprise</span>
            <div className="pricing__price">$49<span className="pricing__period">/mo</span></div>
            <p className="pricing__desc">For the most devoted trades who push the limits of prediction markets.</p>
            <ul className="pricing__features">
              <li>Everything in Pro</li>
              <li>In depth analytics</li>
              <li>Daily articles to keep you informed</li>
              <li>Access to our latest prediction AI</li>
            </ul>
            <button className="btn-secondary">Contact us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
