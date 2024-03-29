import React from 'react';
import PropTypes from 'prop-types';

const ServicePrices = ({ prices }) => {
    return (
        <div>
            {prices.map((category) => (
                <div key={category.title} className="mb-4">
                    {category.title && (
                        <h3 className="subtitle is-4 mb-0">{category.title}</h3>
                    )}

                    <table className="table is-fullwidth">
                        <tbody>
                            {Object.entries(category)
                                .filter(([key, value]) => key !== 'title')
                                .map(([key, value]) => (
                                    <tr key={key}>
                                        <th>{key}</th>
                                        <td className="has-text-right">
                                            {value}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

PropTypes.propTypes = {
    prices: PropTypes.array.isRequired,
};

export default ServicePrices;
