import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NgWizardService } from 'ng-wizard';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { environment } from 'src/environments/environment';
declare var Razorpay : any;

@Component({
  selector: 'app-visa-payment',
  templateUrl: './visa-payment.component.html',
  styleUrls: ['./visa-payment.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class VisaPaymentComponent implements OnInit {
  @Input() submitedData: any;

  @Output() statusMsg: any = new EventEmitter<any>();

  recivedData: any;

  amount: any;

  public files: any[] = [];

  uploadModal : boolean;

  paymentResponse: any;

  show: boolean = false;

  docUploadForm = this.fb.group({
    invoice_doc: ['', Validators.required],
  });

  uploadedFile: File;

  constructor(
    private ngWizardService: NgWizardService,
    private ApiService: ApiService,
    private MessageService: MessageService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private paymentservice: PaymentService
  ) {}

  ngOnInit(): void {
    this.recivedData = this.submitedData.submitedData;
    this.amount = this.submitedData.response.fee;

    console.log('userData : ', this.submitedData);
    console.log('data : ', this.recivedData);

    console.log('amount : ', this.amount);
  }

  onPayment() {
    // this.ApiService.postVisaPayment(
    //   this.submitedData.response.pay,
    //   this.submitedData.response.id.id
    // ).subscribe((res) => {
    //   console.log('response :', res);
    //   this.uploadModal= true;
    //   this.paymentResponse = res;
    //   // this.ngWizardService.next();
    // });
    let options = {
      key: environment.rezorpay_key,
      amount: this.amount[0].member_amount? this.amount[0].member_amount : this.amount[0].non_member_amount,
      name: 'UCCI',
      description: 'Web Development',
      image:
        'https://ucciudaipur.com/wp-content/uploads/2021/11/ucci-logo-update-2.png',
      order_id: this.submitedData.response.Order_id,
      handler: function (response: any) {
        var event = new CustomEvent('payment.success', {
          detail: response,
          bubbles: true,
          cancelable: true,
        });
        window.dispatchEvent(event);
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        address: '',
      },
      theme: {
        color: '#0ec6c6',
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();

    rzp1.on('payment.failed', (response: any) => {
      console.log(response)
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      let statusDetail = {
        status : "Payment Failed",
        payment_id:response.error.metadata.payment_id,
        razorpay_signature:"",
        description:response.error.description
      }
      this.paymentservice.servicePayment(this.submitedData.response.order_id, statusDetail).subscribe((res:any)=> {
        console.log("Failed : ", res)
      })
    });
  }

  onBackPress() {
    this.ngWizardService.previous();
  }

  onFileChange(pFileList: File[]) {
    console.log('files : ', pFileList);

    if (pFileList[0].type == 'application/pdf') {
      this.uploadedFile = pFileList[0];
      this.files = Object.keys(pFileList).map((key) => pFileList[key]);
      this.show = true;
    } else {
      this.MessageService.add({
        severity: 'error',
        summary: 'Please select pdf file',
        detail: 'File formate is not valid',
      });
    }

    // this._snackBar.open("Successfully upload!", 'Close', {
    //   duration: 2000,
    // });
  }

  deleteFile(f) {
    this.files = this.files.filter(function (w) {
      return w.name != f.name;
    });
    // this._snackBar.open("Successfully delete!", 'Close', {
    //   duration: 2000,
    // });
  }

  openConfirmDialog(i: any) {
  //  debugger; 
    this.confirmationService.confirm({
      message: 'Do you want to delete this document?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.files.splice(i, 1);
        this.docUploadForm.reset();
        this.show = false;
        this.MessageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Document deleted.',
        });
      },
      
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.MessageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected.',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.MessageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have deleted document.',
            });
            break;
        }
      },
    });

    // const dialogRef = this.dialog.open(DialogConfirmComponent, {
    //   panelClass: 'modal-xs'
    // });
    
  }

  onDocUpload() {
    debugger;
    let formData = new FormData();
    if (this.docUploadForm.valid) {
      formData.append('invoice_doc', this.uploadedFile, this.uploadedFile.name);
      console.log('Doc Data : ', formData);
      this.ApiService.postDocuments(
        this.paymentResponse.Token,
        this.paymentResponse.id,
        formData
      ).subscribe((res) => {
        console.log(res);
        this.uploadModal= false;
        this.ngWizardService.next();
        this.statusMsg.emit('Document Uploaded Successfully!')
      });
    }
  }

  deleteFromArray(index) {
    console.log(this.files);
    this.files.splice(index, 1);
  }


  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    console.log(event);
    let statusDetail = {
      status : "Payment Success",
      payment_id:event.detail.razorpay_payment_id,
      razorpay_signature:event.detail.razorpay_signature,
      description:"Payment Success"
    }
    this.paymentservice.servicePayment(this.submitedData.response.order_id,statusDetail).subscribe((res:any)=> {
      console.log("success : ", res);
      this.uploadModal= true;
      this.paymentResponse = res;
    })
  }
}
