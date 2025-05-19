const ImgSec = import.meta.glob<{ default: string }>('./*.png', {
    eager: true,
    import: 'default',
  });

  export default ImgSec