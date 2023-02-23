import Me from '../../assets/Snapchat-1401546064 (1) - Copy.jpg'



const styles = {
  homePgHeader: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 60,
  },
  h2: {
    color: 'black',
  },
  p: {
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    border: 'solid'
  },
  card: {
    width: 40,
  }
}


function Aboutme() {
  return (
    <div>
      <div className='homePg-header' style={styles.homePgHeader}>
        <h2>About Me</h2>
      </div>
      <div className="container">
        <div className="card col imgCard" styles={styles.card}>
          <img src={Me} alt="tyresekingImg" className='meIMG'></img>
        </div>
        <div className="card col" style={styles.homePgHeader}>
          <div className="card-body">
            <h5 className="card-title">Education</h5>
            <p className="card-text">Im an gradute of Georgia Tech full Stack Web Development Bootcamp  </p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">Career Path</h5>
            <p className="card-text">I'm currently an Butcher but ive always been interesting in computer and video so why not pursuit a career in both and become an video game developer</p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">Right Now</h5>
            <p className="card-text"> I have completed many projects now that I started my coding career. They can be seen in the Portfolio section of this page. If you have any more questions about me, feel free to contact me through the Contact page. My email and Github are also linked below.
              Thank you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme