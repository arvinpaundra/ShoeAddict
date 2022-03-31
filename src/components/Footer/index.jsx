const Footer = () => {
  return (
    <div className="text-center md:p-5 p-3 bg-black text-white text-base font-light">
      <p>
        &copy;{' '}
        <a
          href="https://github.com/arvinpaundra"
          className="font-medium hover:text-orange-500 hover:underline hover:underline-offset-2"
        >
          Arvin Paundra Ardana
        </a>{' '}
        | ShoeAddict.
      </p>
    </div>
  );
};

export default Footer;
