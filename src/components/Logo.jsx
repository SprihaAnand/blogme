import logoImage from './blogme.png'; // Import the image file

function Logo() {
  return (
    <div>
      <img src={logoImage} alt="BlogMe Logo" style={{ width: '100%', maxWidth: '100px' }} />
    </div>
  );
}

export default Logo;
