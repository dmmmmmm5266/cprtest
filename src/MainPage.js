import React from 'react';

const MainPage = () => {
  const handleStartQuiz = () => {
    alert("測驗開始！");
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img 
        src="/pic1.png" 
        alt="急救圖片" 
        style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} 
      />
      <div>
        <button
          onClick={handleStartQuiz}
          style={{
            backgroundColor: '#6fb8d3', 
            color: 'white', 
            padding: '15px 30px', 
            borderRadius: '5px', 
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          測驗開始！
        </button>
      </div>
    </div>
  );
};

export default MainPage;
