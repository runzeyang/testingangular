import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private $location: any;

  constructor() { }

  ngOnInit() {
  }
  gohome() {
    this.$location.path('/csi/home');
  }
  openRequestedPopup() {
    const strWindowFeatures = `
    menubar=yes,
    location=yes,
    resizable=yes,
    scrollbars=yes,
    status=yes`;
    const windowObjectReference =
      window.open(
        'https://localhost:8080/hatemonitor_war/#!/fah/reportHate',
        'FAH',
        strWindowFeatures
      );
  }
  login () {
    authService.logout();
    $scope.badLogin = false;
    userService.login($scope.user.email, $scope.user.password)
      .success(function(data) {
        this.goHome();
        }
      );
  };
}
