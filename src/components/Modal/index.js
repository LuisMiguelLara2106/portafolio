import React, {useRef, useEffect, useCallback} from 'react';
// import ReactDOM from "react-dom";
import {useSpring, animated} from 'react-spring';

// import courseImg from '../../images/calcular.png';

import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
     Background,
     ModalContent, 
     ModalWrapper,
     CloseModalButton,
     ModalTargetContainer,
     ModalCourse,
     CourseImg,
     InfoCourse,
     TitleCouse,
     ProgressCourse,
     TitleTeacher,
     ContainerInfoCourse,
     ContainerButtonCourse
    } from './ModalElements';

const Modal = ({ 
    showModal, 
    setShowModal
    }) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 300 
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    const percentage = 50;

  return (
        <>
        {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
                {/* <ModalImg background={objectModal.imgBg} src={objectModal.modalImg}/> */}
                <ModalContent>
                    {/* <TopLine>{objectModal.topLine}</TopLine> */}
                    {/* <Description>{objectModal.description}</Description> */}
                    <ModalTargetContainer>
                        {/* <ModalCourse>
                            <ContainerInfoCourse>
                                <CourseImg />
                                <InfoCourse>
                                    <TitleCouse></TitleCouse>
                                    <TitleTeacher></TitleTeacher>
                                    <ProgressCourse>
                                        <ProgressBar />
                                    </ProgressCourse>
                                </InfoCourse>
                            </ContainerInfoCourse>
                            <ContainerButtonCourse>
                            </ContainerButtonCourse>
                        </ModalCourse> */}
                    </ModalTargetContainer>
                </ModalContent>
                <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev => !prev)}
                />
            </ModalWrapper>
            </animated.div>
        </Background>
    ) : null}
    </>

  )
}

export default Modal;
