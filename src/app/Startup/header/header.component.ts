import { Component, computed, inject, signal } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UtilService } from '../../services/util.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);
  readonly util = inject(UtilService);
  readonly router = inject(Router);
  userName = computed(() => this.util.userName());

  // call
  onCall() {
    this.util.userName.set('Calling');
  }
  // Login functionality
  onLogin() {
    if (this.util.isLoggedIn()) {
      this.router.navigate(['/user'])
    } else {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '450px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        if (result !== undefined) {
        }
      });
    }
  }
}
