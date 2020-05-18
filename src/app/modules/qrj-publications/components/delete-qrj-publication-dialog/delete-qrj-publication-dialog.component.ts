import { Component, Inject, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { DeleteQrjPublication } from '../../states/qrj-publications-crud-state/qrj-publications-crud.actions'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-delete-qrj-publication-dialog',
  templateUrl: './delete-qrj-publication-dialog.component.html',
  styleUrls: ['./delete-qrj-publication-dialog.component.scss'],
})
export class DeleteQrjPublicationDialogComponent implements OnInit {
  id: string

  constructor(
    public dialogRef: MatDialogRef<DeleteQrjPublicationDialogComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) id: string
  ) {
    this.id = id
  }

  ngOnInit() {}

  deleteQrjPublication() {
    this.store.dispatch(new DeleteQrjPublication({ id: this.id }))
    this.dialogRef.close()
  }
}