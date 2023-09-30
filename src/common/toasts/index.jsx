import { ImCross } from "react-icons/im";

export const styles = {
  position: 'bottom-right',
  autoClose: 2000,
  closeOnClick: true,
  closeButton: (
    <p>
      <ImCross />
    </p>
  ),
  style: { color: 'white', backgroundColor: 'red' },
};
