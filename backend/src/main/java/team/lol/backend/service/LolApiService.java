package team.lol.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team.lol.backend.util.RestTemplateUtil;

/**
 * LolApiService
 */
@Service
public class LolApiService {

    @Autowired
    RestTemplateUtil re;
    
}