package main

import (
	"fmt"
)


type Door interface {
	getHeight() int 
	getWidth() int 
}

type WoodenDoor struct {
	height int 
	width int 
}

func NewWoodenDoor(height, width int) *WoodenDoor{
	return &WoodenDoor{height: height, width: width}
}

//receiver function 
func (w *WoodenDoor) getHeight() int {
	return w.height
}

func (w *WoodenDoor) getWidth() int {
	return w.width
}

type DoorFactory struct{}

//receiver function 
func (df *DoorFactory) makeDoor(height, width int) Door {
	return NewWoodenDoor(height, width)
}

func main() {
	doorFactory := &DoorFactory{}
	door := doorFactory.makeDoor(80, 30)
	fmt.Printf("door height: %d\n", door.getHeight())
	fmt.Printf("door width:  %d\n", door.getWidth())
}

// adaptor pattern 
// existing payment processors 

type Paypal struct{}

func (p *Paypal) MakePayment(amount float32) bool {
	fmt.Printf("Paypal payment processed for $%.2f\n", amount)
	return true
}

type Stripe struct{}

func (s *Stripe) Charge(amount float64) error {
	fmt.Printf("stripe charge processed for $%.2f\n", amount)
	return nil
}

type PaymentProcessor interface {
	ProcessPayment(amount float32) error
}


type PaypalAdapter struct {
	paypal *Paypal
}

func (p *PaypalAdapter) ProcessPayment(amount float32) error {
	success := p.paypal.MakePayment(amount)
	if !success{
		return fmt.Errorf("payment failed")
	}
	return nil 
}

type StripeAdapter struct {
	stripe *Stripe 
}

func (s *StripeAdapter) ProcessPayment(amount float32) error {
	return s.stripe.Charge(float64(amount))
}


func main() {
	processors := []PaymentProcessor{
		&PaypalAdapter{paypal: &Paypal{}}, 
		&StripeAdapter{stripe: &Stripe{}},
	}
	amount := float32(100.50)

	for _, processor := range processors{
		err := processor.ProcessPayment(amount)
		if err != nil {
			fmt.Println("Error processing payment:", err)
		} else {
			fmt.Println("Payment processed successfully")
		}
	}
}