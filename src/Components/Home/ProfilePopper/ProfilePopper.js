import { useRef, useState } from "react";
import { Button, Image, Popover, Overlay } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import avatar from "./../../../images/profile.png";

const ProfilePopper = () => {
  const {
    user: { displayName, email, photoURL },
    logOut,
  } = useAuth();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Image
        style={{ maxWidth: "40px" }}
        src={photoURL || avatar}
        roundedCircle
        onClick={handleClick}
      />

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
            <strong className="text-center d-block">{displayName}</strong>
            <strong className="text-center d-block">{email}</strong>
            <div className="d-flex justify-content-center mt-1">
              <Button
                onClick={logOut}
                variant="outline-danger"
                className="py-0 px-1"
                size="sm"
              >
                Logout
              </Button>
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default ProfilePopper;
