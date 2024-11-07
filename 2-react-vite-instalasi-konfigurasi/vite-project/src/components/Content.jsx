/* eslint-disable react/prop-types */
export default function Content(props) {
  return (
    <>
      <img src="../assets/shofa.jpg" width={50} />
      <p>
        Saya {props.programmer} sedang belajar menginstalasi, mengkonfigurasi
        dan menjalankan react dengan baik dan benar
      </p>
      <p>Mencoba kombo {props.komboTeknologi}</p>
    </>
  );
}
