import React from "react";
import NewWindow from "react-new-window";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function Payment({amount, onClose}) {
  return (
    <NewWindow>
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Biling details</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput label="First name" id="form1" type="text" required/>
                </MDBCol>
                <MDBCol>
                  <MDBInput label="Last name" id="form2" type="text" required/>
                </MDBCol>
              </MDBRow>
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form4"
                type="email" required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone"
                id="form5"
                type="number" required
              />
              <hr className="my-4" />
              <hr className="my-4" />
              <h5 className="mb-4">Payment</h5>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    label="Name on card"
                    id="form6"
                    type="text"
                    wrapperClass="mb-4"
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="3">
                  <MDBInput
                    label="Expiration"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                    required
                  />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput
                    label="CVV"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn size="lg" onClick={onClose}>
                Continue to checkout
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Summary</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Appointment Cost
                  <span>₹{amount}</span>
                </MDBListGroupItem>
                <hr className="my-2"></hr>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>₹{amount}</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </NewWindow>
  );
}