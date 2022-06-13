import React from 'react';
import './footer.scss'


const Footer = () => {
  return (
    <div className="Footer">
         <div className="container">
            <div className="row">
                <div className="col-sm-5 copyright">
                    <p>
                        Copyright &copy; <span id="current-year">2022</span> Nilufaer Abulimiti
                    </p>
                </div>
                <div className="col-sm-2 top">
                    <span id="to-top">
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="col-sm-5 social">
                    <ul>
                        <li>
                            <a href="https://github.com/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;