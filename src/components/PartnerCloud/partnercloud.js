import './partnercloud.scss';
import partners from './partners.json';

const partnersmap = Array.from(partners);

function Partnercloud() {

  const Partnermap = partnersmap.map((partner, index) =>
      <a key={index} className="partner" href={partner.url}>
        <img key={index} alt="partner logo" src={partner.imagelink} />
      </a>
  );

  return (
    <div id="partners">
      <div className="text">
        <h3>brought to you by:</h3>
        <div id="partnercloud">
          {Partnermap}
        </div>
      </div>
    </div>
  );
};

export default Partnercloud;
