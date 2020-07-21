import React from 'react';
import { Link } from 'react-router-dom';
import { Element as ScrollTarget } from 'react-scroll';
import FemaleModel from 'Assets/images/FemaleModel.jpg';
import MaleModel from 'Assets/images/MaleModel.jpg';

const Styles = () => {
    return (
        <section className="section">
            <ScrollTarget name="intro">
                <h1 className="title is-size-1 has-text-weight-medium has-text-centered">
                    Voor wie zoekt u een haarstijl?
                </h1>
                <div className="columns is-centered mt-1">
                    <div className="column"></div>
                    <div className="column is-2 box">
                        <Link to="/vrouwen">
                            <figure className="image is-2by3">
                                <img src={FemaleModel} alt="TODO" />
                            </figure>
                        </Link>
                    </div>
                    <div className="column is-1"></div>
                    <div className="column is-2 box">
                        <Link to="/mannen">
                            <figure className="image is-2by3">
                                <img src={MaleModel} alt="TODO" />
                            </figure>
                        </Link>
                    </div>
                    <div className="column"></div>
                </div>
            </ScrollTarget>
        </section>
    );
};

export default Styles;