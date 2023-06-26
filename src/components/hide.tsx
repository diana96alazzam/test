export function Hide() {
  return (
    <div className="container" data-testid="container">
      <style>
        {`
            .second {
                display: none;
            }
            .container:hover .second {
                display: block;
            }
        `}
      </style>
      <div className="first" data-testid="first">
        first
      </div>
      <div className="second" data-testid="second">
        second
      </div>
    </div>
  );
}
