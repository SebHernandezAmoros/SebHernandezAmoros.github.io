import Swal from "sweetalert2";

export default function AlertButton() {
  const showAlert = () => {
    Swal.fire({
      title: "¡Hola Sebastián! 🚀",
      text: "Tu portafolio con Astro está funcionando",
      icon: "success",
      confirmButtonText: "Genial"
    });
  };

  return (
    <button
      onClick={showAlert}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#22c55e",
        color: "white",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Probar SweetAlert2 🎉
    </button>
  );
}
