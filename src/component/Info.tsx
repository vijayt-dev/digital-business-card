function Info(){
    const image = require("../images/laura-smith.png");
    return(
        <section className="card--info">
            <img src={image} alt="person-laura-smith" className="img"/>
            <div className="card--info-content">
                <p className="card--info-title">Laura Smith</p>
                <p className="card--info-subtitle">Frontend Developer</p>
                <a className="card--info-website" href="laurasmith.website">laurasmith.website</a>
                <div className="card--info-social-links">
                    <a className="link-btn link-email" href="mailto:#"><i className="fa-solid fa-envelope"></i> Email</a>
                    <a className="link-btn link-linkedin" href="#"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
                </div>
            </div>
        </section>
    )
}

export default Info;