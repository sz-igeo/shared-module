import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmss-page-jump-panel',
  templateUrl: './page-jump-panel.component.html',
  styleUrls: ['./page-jump-panel.component.scss']
})
export class PageJumpPanelComponent implements OnInit, OnDestroy {
  @Input() tipText: string;
  @Input() jumpText: string;
  @Input() countdown: number;
  @Input() routerPath: string;

  private _timer: any;
  private _ellipsis = 5;
  private _loop = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._timer = setInterval(() => {
      this.countdown -= 1;
      this._ellipsis = this._loop ? this._ellipsis + 1 : this._ellipsis - 1;
      if (this._ellipsis === 5 || this._ellipsis === 7) {
        this._loop = !this._loop;
      }

      if (this.countdown === 0) {
        this.router.navigate([this.routerPath], {
          relativeTo: this.activatedRoute
        });
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this._timer) {
      clearInterval(this._timer);
    }
  }
}
