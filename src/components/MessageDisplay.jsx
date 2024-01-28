const MessageDisplay = ({ userMessage, computerMessage }) => {
    return (
      <div>
        {userMessage !== null && <p className="text-xl mt-4">{userMessage}</p>}
        {computerMessage !== null && (
          <p className="text-xl mt-4">{computerMessage}</p>
        )}
      </div>
    );
  };
  
  export default MessageDisplay;