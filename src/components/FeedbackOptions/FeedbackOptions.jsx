export const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {

  return (
    <>
      <form>
        <button name="good" type="button" onClick={handleGood}>
          Good
        </button>
        <button name="neutral" type="button" onClick={handleNeutral}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={handleBad}>
          Bad
        </button>
      </form>
    </>
  );
};
