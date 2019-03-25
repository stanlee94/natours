import React from 'react';
import Button from './Button';

class Tours extends React.Component {
    handleClick = () => {
        this.props.onClose();
    }

    render() {
        return (
            <section className="section-tours">
                <div className="u-center-text">
                   <div className="heading-secondary u-margin-bottom-8">Most popular tours</div>
                </div>
                <div className="row">
                <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side">
                                <div className="card__side card__side--front">
                                    <div className="card__image card__image--1"></div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>3 days tour</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>Sleep in cozy hostel</li>
                                            <li>Difficulty: Easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__cta--only">Only</div>
                                        <div className="card__cta--value">$297</div>
                                        <div className="u-text-uppercase" onClick={this.handleClick}>
                                            <Button  color="white" buttonText="Book now!" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side">
                                <div className="card__side card__side--front">
                                    <div className="card__image card__image--2"></div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">The forest hiker</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>7 days tour</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: Medium</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__cta--only">Only</div>
                                        <div className="card__cta--value">$1297</div>
                                        <div className="u-text-uppercase" onClick={this.handleClick}>
                                            <Button color="white" buttonText="Book now!" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side">
                                <div className="card__side card__side--front">
                                    <div className="card__image card__image--3"></div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">The snow adventurer</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>5 days tour</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in 5-star hotel</li>
                                            <li>Difficulty: Difficult</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__cta--only">Only</div>
                                        <div className="card__cta--value">$897</div>
                                        <div className="u-text-uppercase" onClick={this.handleClick}>
                                            <Button color="white" buttonText="Book now!" />
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="u-text-uppercase u-center-text">
                        <Button color="green" buttonText="Discover all tours" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Tours;