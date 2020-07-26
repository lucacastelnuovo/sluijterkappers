import React from 'react';
import styled from 'styled-components';

import tecniArt from 'Assets/images/brands/tecni_art.jpg';
import kerastase from 'Assets/images/brands/kerastase.jpg';
import loreal from 'Assets/images/brands/loreal.jpg';
import marcInbane from 'Assets/images/brands/marc_inbane.jpg';

const Logo = styled.figure`
    width: 192px;
    margin-left: auto !important;
    margin-right: auto !important;
`;

const FooterBrands = () => {
    return (
        <div className="content">
            <div className="columns is-centered">
                <div className="column is-narrow">
                    <Logo className="image">
                        <img
                            alt="Tecni Art || Sluijter Kappers"
                            src={tecniArt}
                        />
                    </Logo>
                </div>
                <div className="column is-narrow">
                    <Logo className="image">
                        <img
                            alt="Kérastase || Sluijter Kappers"
                            src={kerastase}
                        />
                    </Logo>
                </div>
                <div className="column is-narrow">
                    <Logo className="image">
                        <img alt="L'Oréal || Sluijter Kappers" src={loreal} />
                    </Logo>
                </div>
                <div className="column is-narrow">
                    <Logo className="image">
                        <img
                            alt="Marc Inbane || Sluijter Kappers"
                            src={marcInbane}
                        />
                    </Logo>
                </div>
            </div>
        </div>
    );
};

export default FooterBrands;
