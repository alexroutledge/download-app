import { TestBed } from '@angular/core/testing';

import { IconService } from './icon.service';

describe('IconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IconService = TestBed.get(IconService);
    expect(service).toBeTruthy();
  });

  it('should return the correct icon', () => {
    const service: IconService = TestBed.get(IconService);
    expect(service.getIcon('available')).toEqual('done');
    expect(service.getIcon('scheduled')).toEqual('block');
    expect(service.getIcon('download')).toEqual('download');
  });

  it('should return the correct color', () => {
    const service: IconService = TestBed.get(IconService);
    expect(service.getColor('available')).toEqual('primary');
    expect(service.getColor('scheduled')).toEqual('warn');
    expect(service.getColor('download')).toEqual('primary');
  });

});
