export default function Progress({ donations }) {
  const getTotal = (arr) => {
    let total = 0;
    for (let donation of arr) {
      total += donation.amount;
    }
    return total;
  }
  
  const totalAmount = getTotal(donations)

  return (
    <div className="progress">
      <h2>
        Raised <span className="secondary">${ totalAmount }</span> of
        <span className="secondary"> $1000</span>
      </h2>
    </div>
  );
}

