export const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
      backgroundColor: '#f5a75f',
      padding: '20px',
      borderRadius: '8px',
      margin: '20px 0',
    }
  
    const textStyle = {
      fontSize: '24px',
      color: '#333',
      textAlign: 'center',
    }
  
    return (
      <div style={containerStyle}>
        <p style={textStyle}>{greeting}</p>
      </div>
    );
  };